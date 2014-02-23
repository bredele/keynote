
/**
 * Substitute variable with data.
 * 
 * @param  {String} text 
 * @param  {Object} data 
 * @return {String}      
 */

module.exports = function supplant(text, data){
  return text.replace(/\{\{([^}]+)\}\}/g, function(_, expr) {
    return data[expr.trim()] || '';
  });
};


