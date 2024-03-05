function skillsMember() {
  return {
    name: 'John',
    skills: ['JS', 'React', 'Python'],
    age: 30,
    // Method
    showSkills() {
      this.skills.forEach((skill) => {
        console.log(`${this.name} knows ${skill}`);
      });
    },
  };
}