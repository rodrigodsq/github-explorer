# ----------------------------GERAR APLICAÇÃO ---------------------------

* create-react-app primeiro-projeto-react --template=typescript     :    `Iniciando o projeto react com typescript`;

# ------------------------- ESLINT aula 3 -------------------------

* yarn add -D eslint    :   `instalação do eslint`;

* remover a chave "eslintConfig" do package.json;

* yarn eslint --init    :   `Para iniciar a configuração do eslint`
    Opções a serem selecionadas:
    {
       To check syntax, find problems, and enforce code style,
       JavaScript modules (import/export),
       React,
       Yes,
       Browser,
       Use a popular style guide,
       Airbnb: https://github.com/airbnb/javascript,
       JSON,
       Would you like to install them now with npm: No,
    }

* yarn add eslint-plugin-react@^7.21.5 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint-plugin-import@^2.22.1 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-react-hooks@^4 @typescript-eslint/parser@latest -D      :       `ao fim da instalação de conf do eslint pede para instalamos essas depedencias porem não aceitamos, e instalamos essa que esta bem mais leve`;

* .eslintignore     :   `para que o eslint ignore alguns arquivos`;

* alterações no .eslintrs.json;

* yarn add eslint-import-resolver-typescript -D   :   `essa depedencia vai ajudar o react a entender os arquivos typescript nas importações`;


# --------------------------------PRETTIER --------------------------------

* yarn add prettier eslint-config-prettier eslint-plugin-prettier -D    :   `instalação do prettier para autocorreção do codigo`;

* prettier.config.js    :   `arquivo de conf do prettier`;

# ----------------------------------STYLES----------------------------------

* yarn add polished   :   `dependencia para trabalha com cores`;

* yarn add react-icons    :   `depedencia de icones`;

* sempre que uma interface ter mais de tres nives(muitas tags aninhadas), é recomendavel criar um component para essa interface;

# ------------------------ ANOTS REACT -------------------------

* <React.StrictMode>    :   `tag que melhora a tratativa de erro do react, fica no src/index.tsx`;

* src/react-app-env.d.ts    :   `arquivo que ajuda o vscode entender a tipagem do react, não devemos nos preocupar`;

* src/react-app-env.d   :   `arquivo que é executado automaticamente antes de todos os testes`;

* sempre utilizar o styled components pois arquivo css são refeenciados globalmente, onde se vc colocar estilização em uma h1, todas h1 irão ter essas estilização, independente da pagina;

* aula 9 do iniciando react, Tem bastanteee informação;



