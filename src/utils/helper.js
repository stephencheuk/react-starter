import { Menu } from "../menu";

const isPrivateArea = () => {

  let location = window.location;

  let matched = Menu.filter(o => o.link !== '/').filter(o => location.pathname.indexOf(o.link) === 0)[0];

  matched ||= Menu.filter(o => o.link === '/').filter(o => location.pathname.indexOf(o.link) === 0)[0];

  return matched.protect ? true : false;

}

export { isPrivateArea };
