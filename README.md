# Componente de Curso para Plataforma Online de Educação

Este projeto é um componente React destinado a uma plataforma online de educação. O componente exibe informações principais de um curso, incluindo título, descrição, professor, data de início e um botão para inscrição. O objetivo é fornecer uma interface consistente e acessível para exibir e interagir com informações sobre cursos.

## Estrutura do Componente

O componente principal é responsável por agrupar os seguintes subcomponentes:

- **Título**: Exibe o título do curso.
- **Imagem do Instrutor**: Mostra a foto do instrutor.
- **Nome do Instrutor**: Exibe o nome do instrutor.
- **Elemento de Vídeo**: Incorpora um vídeo relacionado ao curso.
- **Data de Início**: Mostra a data de início do curso.
- **Descrição do Curso**: Fornece uma descrição detalhada do curso.
- **Botão de Inscrição**: Permite que os usuários se inscrevam no curso.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface de usuário.
- **cva (Class Variance Authority)**: Utilizado para gerenciar e aplicar variantes de classes CSS de maneira eficiente.
- **clx**: Biblioteca auxiliar para composição e manipulação de classes CSS.
- **Bootstrap**: Framework CSS utilizado para estilizar os componentes.

### Vantagens do cva e clx

O **cva** oferece várias vantagens para o desenvolvimento de componentes em React:

- **Personalização de Classes**: Facilita a criação e personalização de classes CSS para diferentes variantes de um componente. Permite a definição de variantes de estilo (por exemplo, `standard` e `featured`) e tamanhos (`small`, `medium`, `large`).
- **Agrupamento de Classes**: Com o **clx**, é possível agrupar e gerenciar classes CSS de forma modular e eficiente. Isso reduz a complexidade e a redundância no código CSS.
- **Definição de ClassName**: Permite a adição de classes adicionais através da propriedade `className`, facilitando ajustes específicos conforme necessário.

## Eventos Personalizados

No subcomponente **Botão de Inscrição**, foi adicionado um evento personalizado que dispara uma ação para ser tratada na aplicação principal. Isso permite uma interação dinâmica e a integração com a lógica da aplicação.

## Acessibilidade

Os elementos foram configurados com atributos para seguir as diretrizes de acessibilidade WCAG. O componente foi validado utilizando ferramentas online de avaliação para garantir que atende aos requisitos de acessibilidade.

## Instalação e Uso

Para integrar este componente em sua aplicação, siga estes passos:

1. **Instalação das Dependências**: Certifique-se de ter o **React**, **cva**, e **clx** instalados no seu projeto. Se necessário, instale as dependências com:

   ```bash
   npm install class-variance-authority clx bootstrap
   ```
