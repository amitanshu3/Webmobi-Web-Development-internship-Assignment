import React, { useState, useEffect } from 'react';

function App() {
  const [images, setImages] = useState(() => {
    const localImages = JSON.parse(localStorage.getItem('images'));
    return localImages ? localImages : [
      require('./images/image1.png'),
      require('./images/image2.png'),
      require('./images/image3.png'),
      require('./images/image4.png'),
      require('./images/image5.png'),
      require('./images/image6.png'),
      require('./images/image7.png'),
      require('./images/image8.png')
    ];
  });

  useEffect(() => {
    localStorage.setItem('images', JSON.stringify(images));
  }, [images]);

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData('index', index);
    event.dataTransfer.setData('image', images[index]);
  };

  const handleDrop = (event, targetIndex) => {
    event.preventDefault();
    const draggedIndex = event.dataTransfer.getData('index');
    const newImages = [...images];
    const temp = newImages[draggedIndex];
    newImages[draggedIndex] = newImages[targetIndex];
    newImages[targetIndex] = temp;
    setImages(newImages);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 >Drag and Drop Images</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            onDragOver={handleDragOver}
            draggable
            onDragStart={(event) => handleDragStart(event, 0)}
            onDrop={(event) => handleDrop(event, 0)}
            style={{
              margin: '5px',
              border: '1px solid gray',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow:"hidden",
            }}
          >
            <img src={images[0]} alt="Image 1" style={{ maxWidth: '100%', maxHeight: '100%' ,cursor:'pointer'}} />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '50%' }}>
            <div
              onDragOver={handleDragOver}
              draggable
              onDragStart={(event) => handleDragStart(event, 1)}
              onDrop={(event) => handleDrop(event, 1)}
              style={{
                margin: '5px',
                border: '1px solid gray',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img src={images[1]} alt="Image 2" style={{ maxWidth: '100%', maxHeight: '100%' ,cursor:'pointer' }} />
            </div>
          </div>
          <div style={{ width: '50%' }}>
            <div
              onDragOver={handleDragOver}
              draggable
              onDragStart={(event) => handleDragStart(event, 2)}
              onDrop={(event) => handleDrop(event, 2)}
              style={{
                margin: '5px',
                border: '1px solid gray',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img src={images[2]} alt="Image 3" style={{ maxWidth: '100%', maxHeight: '100%' ,cursor:'pointer'}} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '50%' }}>
            <div
              onDragOver={handleDragOver}
              draggable
              onDragStart={(event) => handleDragStart(event, 3)}
              onDrop={(event) => handleDrop(event, 3)}
              style={{
                margin: '5px',
                border: '1px solid gray',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img src={images[3]} alt="Image 4" style={{ maxWidth: '100%', maxHeight: '100%' ,cursor:'pointer'}} />
            </div>
          </div>
          <div style={{ width: '50%' }}>
            <div
              onDragOver={handleDragOver}
              draggable
              onDragStart={(event) => handleDragStart(event, 4)}
              onDrop={(event) => handleDrop(event, 4)}
              style={{
                margin: '5px',
                border: '1px solid gray',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img src={images[4]} alt="Image 5" style={{ maxWidth: '100%', maxHeight: '100%' ,cursor:'pointer' }} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '50%' }}>
            <div
              onDragOver={handleDragOver}
              draggable
              onDragStart={(event) => handleDragStart(event, 5)}
              onDrop={(event) => handleDrop(event, 5)}
              style={{
                margin: '5px',
                border: '1px solid gray',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img src={images[5]} alt="Image 6" style={{ maxWidth: '100%', maxHeight: '100%' ,cursor:'pointer'}} />
            </div>
          </div>
          <div style={{ width: '50%' }}>
            <div
              onDragOver={handleDragOver}
              draggable
              onDragStart={(event) => handleDragStart(event, 6)}
              onDrop={(event) => handleDrop(event, 6)}
              style={{
                margin: '5px',
                border: '1px solid gray',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img src={images[6]} alt="Image 7" style={{ maxWidth: '100%', maxHeight: '100%' ,cursor:'pointer'}} />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            onDragOver={handleDragOver}
            draggable
            onDragStart={(event) => handleDragStart(event, 7)}
            onDrop={(event) => handleDrop(event, 7)}
            style={{
              margin: '5px',
              border: '1px solid gray',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img src={images[7]} alt="Image 8"  style={{ maxWidth: '100%', maxHeight: '100%' ,cursor:'pointer'}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
