const dropArea = document.getElementById('berlin');
const fileList = document.querySelector('#narobi ul');

// Prevent the default behavior of the browser when a file is dragged over the drop area
dropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropArea.textContent = 'Drop files here to upload';
  dropArea.style.backgroundColor = '#333333';
});

// Handle the file drop
dropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  const files = e.dataTransfer.files;

  for (const file of files) {
    const listItem = document.createElement('li');
    listItem.textContent = file.name;
    fileList.appendChild(listItem);

    // You can upload the file to your desired location here using a server-side script.
    // This example only shows the uploaded file names.
  }

  dropArea.style.backgroundColor = '#222222';
});


// This code provides a div with drop functionality. When you drag and drop files onto the "drop-area" div, their names are listed below, and you can implement the actual file upload logic on the server as previously mentioned. The appearance of the drop area has been adjusted with some basic CSS to make it more visually appealing.