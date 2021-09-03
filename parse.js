 fetch("https://i-column-site.microcms.io/api/v1/post/?limit=100", {
            headers: {
                "X-API-KEY": "9719d5ef-40cc-48b3-9ac0-74292c4f5610"
            }
        })
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
          console.log(json)
            var fragment = document.createDocumentFragment();
            for (var i = 0; i < json.contents.length; i++) {

              // if(json.contents[i].category.name === "TOKIO INKARAMI") {
                console.log(json.contents[i])

                var title = document.createElement('h2');
                title.textContent = json.contents[i].title;

                var img = document.createElement('img');
                img.className = "shape";
                img.src = json.contents[i].image.url;

                // "<img src='json.contents[i].image.url'>";

                var category = document.createElement('h5');
                // category.textContent = json.contents[i].category.name;
                category.innerHTML = "<span class='" + json.contents[i].category.id + "''>" + json.contents[i].category.name + "</span>"

                var url = document.createElement('h6');
                url.innerHTML = "<a href='https://i-column-online.netlify.app/" + json.contents[i].id + "'>" + "本ページへ飛ぶ"+ "</a>";


                var body = document.createElement('div');
                body.className = "post-contents";
                body.innerHTML = json.contents[i].body;


                // when category has a contains 'TOKIO INKARAMI' then put the data into "list"

                var item = document.createElement('div');
                item.className = "article";
                item.appendChild(title);
                item.appendChild(img);
                item.appendChild(url);
                item.appendChild(category);
                item.appendChild(body);

                fragment.appendChild(item);

              // }

            }
            document.getElementById('list').appendChild(fragment);
            console.log(json.contents);
        })
