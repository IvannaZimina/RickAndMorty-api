// Normalize a port into a number, string, or false.
const normalizePort = (val) => {
    if (typeof val === 'undefined') {
      return false;
    }
  
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      throw new Error(`Port ${val} incorect`);
    }
    
    // port number
    if (port >= 0) { return port }
  
    throw new Error(`Port ${val} incorect`);
  };
  
  const httpPort = normalizePort(process.env.PORT) || 5000;
  
  module.exports = { httpPort };
  