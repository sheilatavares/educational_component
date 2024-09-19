import React, { useEffect } from 'react';
import './App.css';

import CardOverview from './components/CardOverview';
import photoProfessor from './assets/img/professor.jpg';

function App() {
  useEffect(() => {
    const handleEnrollButtonClick = (event: Event) => {
      const customEvent = event as CustomEvent;
      console.log(customEvent.detail.message);
    };

    window.addEventListener('enrollButtonClick', handleEnrollButtonClick);

    return () => {
      window.removeEventListener('enrollButtonClick', handleEnrollButtonClick);
    };
  }, []);

  const handleClick = () => {
    console.log('Botão de inscricao foi clicado');
  };

  return (
    <div className="App">
      <div className="container-fluid my-5">
        <div className="row d-flex justify-content-center align-items-center px-3">
          <CardOverview
            courseName="Curso de Tecnologias Educacionais"
            variant="standard"
            size="medium"
          >
            <CardOverview.Title variant="standard" size="medium">
              Tecnologias Educacionais
            </CardOverview.Title>
            <CardOverview.VideoPlayer
              videoUrl="https://www.youtube.com/embed/enrTLKqMGgo?si=4-4KNkhhPjhP3Byn"
              title="Sobre o curso de Tecnologias Educacionais"
              size="medium"
              className=""
            />

            <div className="row mt-2">
              <div className="col-md-5">
                <CardOverview.Instructor
                  src={photoProfessor}
                  size="medium"
                  nameSize="small"
                  instructorName="Fabiana Silva"
                  className=""
                />
              </div>
              <div className="col-md-3 d-md-flex align-items-center">
                <CardOverview.StartDate size="small" className="me-1 mt-2">
                  11/01/2025
                </CardOverview.StartDate>
              </div>
              <div className="col-md-4 text-end d-md-flex align-items-center">
                <CardOverview.EnrollButton
                  variant="standard"
                  size="large"
                  className="float-md-end mt-0"
                  onClick={handleClick}
                >
                  Inscreva-se
                </CardOverview.EnrollButton>
              </div>
            </div>

            <CardOverview.Description size="small" className="text-gray mt-4">
              Aprenda a empregar recursos tecnológicos como ferramenta para
              aprimorar o ensino e levar inovação em sala de aula, como
              gamificação na educação.
              <br />
              <br /> Aqui você aprende a promover o desenvolvimento
              sócio-educativo e melhorar o acesso à informação com uso dos
              recursos mais modernos da atualidade, como ferramentas de
              aprendizagem online.
              <br /> <br />
              Adquira novas habilidades Saiba desenvolver, orientar e coordenar
              atividades interativas e de inovação em sala de aula e tecnologias
              educacionais nos mais diversos ambientes educacionais. Nas aulas
              você terá contato com temas, como realidade virtual na educação e
              tecnologias educacionais para inclusão, com o objetivo de formar
              profissionais que usem a tecnologia a favor da Educação.
            </CardOverview.Description>
          </CardOverview>
        </div>
      </div>
    </div>
  );
}

export default App;
