class Task {
  constructor(description, date) {
    this.description = description;
    this.date = date;
    this.code = 0;
    this.isCompleted = false;
  }

  printInfo () {
    if (this.isCompleted) {
      return this.description + ' - Completada';
    } else {
      return this.description + ' - Não completada';
    }
  }
}
