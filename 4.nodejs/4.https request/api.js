var http= require('http');

var data =  require('./data/inventory');

http.createServer(function(req,res){

    if(req.url==='/'){
        res.writeHead(200,{'Content-Type': 'text/json'});
        res.end(JSON.stringify(data))
    }else if(req.url==='/inorder'){
        listinStock(res);
    }
    else if(req.url==='/onback'){
        listoutStock(res)
    }else{

        res.writeHead(200,{'Content-Type': 'text/json'});
        res.end('404 not found') 
    }

}).listen(3000)

console.log('server llistening on port 3000');

function listinStock(res){
  var instock = data.filter(function(item){
      return item.avail === "In stock";
      

  })
  res.end(JSON.stringify(instock))
}
function listoutStock(res){
    var outstock = data.filter(function(item){
        return item.avail === " On back";
        
    })
    res.end(JSON.stringify(outstock))
  }