import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title(i){
    //  return `User ${i+1}`;
    return `User ${i+1}`;
  },
  firstName(){
    return faker.name.firstName();
  },
  lastName(){
    return faker.name.lastName();
  },
  jobTitle(){
    return faker.name.jobTitle();
  },
  phoneNumber(){
    return faker.phone.phoneNumber();
  }
});
