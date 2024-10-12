module.exports = {
  apps: [
    {
      name: 'my-portfolio', // Nome da aplicação
      script: 'npm', // Usando npm para iniciar a aplicação
      args: 'start', // Argumento para o comando start
      exec_mode: 'fork', // Modo de execução
    },
  ],
};
