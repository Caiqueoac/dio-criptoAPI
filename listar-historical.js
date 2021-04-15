
        function listarHistorical( ){

             //My api key
             var apikey = {
                key: '359d8d5a-4633-4a53-b941-de12059137c2'
            }

        //GET Fetch Requisition
        fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
                apikey.key)
                .then((response) => {
                    if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
                    return response.json();
            })
            .then((api) => {



                var text = '';
                    
                    text = text + 
                    
                    
                    `<table class="table table-dark table-hover" style="position : absolute;
                                                                            right: 3px; 
                                                                            text-align:center;">
                            
                                <thead>
                                
                                    <th>Rank #</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Symbol</th>
                                    <th>First Historical Data</th>  
                                
                                </thead>
                                                     
                                                        `;        


                
                
                    var texto = "";
                    // Get 10 coins and symbols 
                    for(let i = 0; i < 10; i++){


                            //Show API information

                            
                            auxImg = i+1;
                            var src = 'https://s2.coinmarketcap.com/static/img/coins/64x64/' + auxImg +'.png',
                                img = document.createElement('img');
                                img.src = src;
                                
                            text = text + `
                                <div class="media">
                                    <tr>
                                        <td style='vertical-align:middle;'> ${auxImg}  </td>
                                        <td style='vertical-align:middle;'> 
                                                <p> <img src= ${img.src}  alt=${api.data[i].name}> </p> 
                                            </td>   
                                        <div class="media-body">
                                            <td style='vertical-align:middle'> 
                                                <h5 class="mt-2">${api.data[i].name}</h5> 
                                            </td>
                                            <td style='vertical-align:middle;'> <p>${api.data[i].symbol}</p> </td>
                                            <td style='vertical-align:middle;'> <p>  ${api.data[i].first_historical_data}</p> </td>
                                        </div>
                                    </tr>
                                `;
                            }
        
                            document.getElementById("coins").innerHTML = text+'</table>';
                            
                        }
                    )
                .catch((error) => {
                console.error(error.message);
            });
        


        }        


       