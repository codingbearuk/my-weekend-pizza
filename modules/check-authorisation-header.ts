interface CheckAuthorisationHeader {
  (authHeader: string): boolean;
}

const checkAuthorisationHeader: CheckAuthorisationHeader = (authHeader) => {
  if (authHeader === `Bearer ${process.env.AUTH_KEY}`) return true;
  else return false;
};

export default checkAuthorisationHeader;
