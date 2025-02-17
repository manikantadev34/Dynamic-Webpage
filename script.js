let jsonData = [];  

    
    async function fetchData() {
      try {
        const response = await fetch('data.json');
        jsonData = await response.json();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

   
    function loadPage(page) {
      const pageData = jsonData.find(item => item.id === page);

      if (pageData) {
        displayContent(pageData);
      } else {
        document.getElementById('content').innerHTML = '<p>Page not found!</p>';
      }
    }

    
    function displayContent(data) {
      const contentDiv = document.getElementById('content');
      contentDiv.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.content}</p>
      `;
    }

   
    fetchData();