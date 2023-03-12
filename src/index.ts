import addUser from './addUser';
import getUserAll from './getUserAll';
import removeAll from './removeAll';

const main = async () => {
  removeAll();
  await addUser();
  await addUser();
  const users = await getUserAll();
  console.log(users);
};

main();
