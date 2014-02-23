
/**
 * Substitute variable with data.
 * 
 * @param  {String} text 
 * @param  {Object} data 
 * @return {String}      
 */

function supplant(text, data){
  return text.replace(/\{\{([^}]+)\}\}/g, function(_, expr) {
    return data[expr.trim()] || '';
  });
};

