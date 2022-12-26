'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const pessoas = [
      {
        nome: 'Rodrigo da Silva Brito',
        ativo: true,
        email: 'rodrigo.bs@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Raimundo Freitas de Machado',
        ativo: true,
        email: 'raimundo.freitas@gmail.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Maria Gabriela',
        ativo: true,
        email: 'ma.gabi@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Gabriel dos Santos',
        ativo: false,
        email: 'ggSantos@gmail.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Renan Pietro',
        ativo: true,
        email: 'reanan@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Guilherme de Lima Souza',
        ativo: false,
        email: 'guilindo.lima@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('Pessoas', pessoas, {});
  },
 
   async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Pessoas', null, {});
   }
};
