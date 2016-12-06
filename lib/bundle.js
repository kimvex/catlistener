const bundle = function(config){
  config = config  || {};
  var comando;

  var presets;

  for(n in config.presets){
    if(config.presets[n] == "react"){

      presets = " -t [ babelify --presets [ es2015 react ] ] ";

    }else if(config.presets[n] == "es2015" || config.presets[n] == true){

      presets = " -t [ babelify --presets [ es2015 ] ] ";

    }
  }

  if(typeof config.compilado == 'object' && config.compilado.length >= 1 && typeof config.original == 'object' && config.original.length >= 1 && config.compilado.length == config.original.length){
    for(s in config.original){      
        if(comando == undefined){
          comando = config.original[s];
        }else{
          comando = comando + " " + config.original[s];
        }
    }

    comando = comando + " -p [ factor-bundle";

    for(s in config.compilado){
      comando = comando + " -o " + config.compilado[s];
    }

    if(config.common){
      return " " + comando + " ] -o " + config.common + presets;
    }else{
      console.log("ERROR not exist route for common, the file compile into folder root, file name common.js");
      return comando + " ] -o common.js" + presets;
    }

  }else if(typeof config.compilado == 'string' && typeof config.original == 'string'){
    return config.original + " -o " + config.compilado + presets;
  }else if(config.original != 'object' && config.compilado != 'object'){
    console.log("Not assigned name end at file " + config.original + " compiled");
  }
}

module.exports = bundle;
