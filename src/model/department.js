const Sequelize = require('sequelize');



//i'm unable to connect sequiliser with rendor database...(but its working good on localhost)
const sequelize = new Sequelize('kashishdb', "kashish", "kashish@2000", {
    host: 'localhost',
    dialect: 'postgres'
  });
    
 sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });




// department model
const Department = sequelize.define('Department', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  employeeCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});


//employee model
const Employee = sequelize.define('Employee', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  departmentId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Departments',
      key: 'id'
    }
  }
});

Department.hasMany(Employee, { onDelete: 'CASCADE' });
Employee.belongsTo(Department);

modules.export = {Department,Employee }