
if (char.description === "") {
            char.description = "Описания персонажа пока что нет";
          } else if (char.description.length > 200) {
            char.description = char.description.slice(0, 200) + '...'
          }
          
          
          description: char.description ? char.description.length > 230 ? char.description.slice(0, 200) + '...' : char.description : 'No description',
