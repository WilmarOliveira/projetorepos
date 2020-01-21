import React, { useState, useCallback, useEffect } from 'react';
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa'
import { Container, Form, SubmitButton, List, DeleteButton } from './styles';

import api from '../../services/api';

function Main() {

  const [newRepo, setNewRepo] = useState('');
  const [repositorios, setRepositorios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  //Buscar
  useEffect(() => {
    const repoStorage = localStorage.getItem('repos');

    if(repoStorage) {
      setRepositorios(JSON.parse(repoStorage));
    }
  } , [])

  //Salvar Alterações
  useEffect(() => {
    localStorage.setItem('repos', JSON.stringify(repositorios));
  } , [repositorios]);

  function handleInputChange(e) {
    setNewRepo(e.target.value);
    setErrorMessage(null);
  }

  const handleDelete = useCallback((repo) => {
    const find = repositorios.filter(r => r.name !== repo);
    setRepositorios(find);
  }, [repositorios]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    async function submit() {
      setLoading(true);
      setErrorMessage(null);
      try{

        if(newRepo === '') {
          setErrorMessage('"Por favor, adicione um repositório"')
          throw new Error('Repositório vazio!');
        }

        const response = await api.get(`repos/${newRepo}`);

        const hasRepo = repositorios.find(repo => repo.name === newRepo);

        if(hasRepo) {
          setErrorMessage('"Este repositório já foi adicionado na lista de repositórios"')
          throw new Error('Repositório duplicado!');
        }

        const data = {
          name: response.data.full_name
        }

        setRepositorios([...repositorios, data]);
        setNewRepo('');


      }catch(erro) {
        console.log(erro);
      }finally {
        setLoading(false);
      }
    }

    submit();

  }, [newRepo, repositorios]);

  return(
    <Container>
      
      <h1>
        <FaGithub size={25} />
        Meus Repositórios
      </h1>

      {errorMessage && <h4>{errorMessage}</h4>}

      <Form onSubmit={handleSubmit} error={errorMessage} >
        <input type="text" placeholder="Adicionar Repositórios" value={newRepo} onChange={handleInputChange} />

        <SubmitButton loading={loading ? 1 : 0} >
          
          {loading ? 
          <FaSpinner size={14} /> 
          : 
          <FaPlus size={14} />}

        </SubmitButton>
      </Form>

      <List>
        {repositorios.map(repo => (
          <li key={repo.name}>
            <span>
              <DeleteButton onClick={() => handleDelete(repo.name)} >
                <FaTrash size={14} />
              </DeleteButton>
              {repo.name}
            </span>
            <a href="">
              <FaBars size={20} />
            </a>
            
          </li>
        ))}
      </List>

    </Container>
  );
}

export default Main;