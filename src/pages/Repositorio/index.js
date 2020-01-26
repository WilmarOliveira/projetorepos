import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Container, Owner, Loading, BackButton, IssuesList } from './styles';
import { FaArrowLeft } from 'react-icons/fa'

function Repositorio({match}) {

  const [repositorios, setRepositorios] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function load() {
      const nomeRepo = decodeURIComponent(match.params.repositorio);

      const [repositorioData, issuesData] = await Promise.all([
        api.get(`/repos/${nomeRepo}`),
        api.get(`/repos/${nomeRepo}/issues` , {
          params: {
            state: 'open',
            per_page: 5
          }
        })
      ]);

      setRepositorios(repositorioData.data);
      setIssues(issuesData.data);
      setLoading(false);

      
    }

    load();
    
  },[match.params.repositorio]);

  if(loading) {
    return(
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    );
    
  }


  return(
    <Container>
      <BackButton to="/" >
        <FaArrowLeft size={20} />
      </BackButton>

      <Owner>
        <img src={repositorios.owner.avatar_url} alt={repositorios.owner.login} />
        <h1>{repositorios.name}</h1>
        <p>{repositorios.description}</p>
      </Owner>

      <IssuesList>
        {issues.map(issue => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />
            
            <div>
              <strong>
                <a href={issue.html_url} >{issue.title}</a>

                {issue.labels.map(label => (
                  <span key={String(label.id)} >{label.name}</span>
                ))}
              </strong>

              <p>By: {issue.user.login}</p>
            </div>
            
          </li>
        ))}
      </IssuesList>

    </Container>
  );
}

export default Repositorio;