import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Container } from './styles';

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


  return(
    <Container>

    </Container>
  );
}

export default Repositorio;