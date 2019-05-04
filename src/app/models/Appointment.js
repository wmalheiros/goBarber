module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Apppointment', {
    date: DataTypes.DATE
  })

  Appointment.associate = models => {
    Appointment.belongsTo(models.User, { foreignKey: 'user_id' })
    Appointment.belongsTo(models.User, { foreignKey: 'proveder_id' })
  }
  return Appointment
}
