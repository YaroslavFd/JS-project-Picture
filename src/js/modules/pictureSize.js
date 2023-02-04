const pictureSize = (imgSelector) => {
  const blocks = document.querySelectorAll(imgSelector);

  function showImg(block) {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -4) + '-1.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'none';
    });
  }

  function hideImg(block) {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -6) + '.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'block';
    });
  }

  blocks.forEach(block => {
    block.addEventListener('mouseover', () => {
      showImg(block);
    });
    block.addEventListener('mouseout', () => {
      hideImg(block);
    });
  });


  // blocks.forEach((block, i) => {
  //   block.addEventListener('mouseenter', (e) => {
  //     let target = e.target;

  //     target.children.forEach(item => {
  //       if (item.tagName == 'IMG') {
  //         item.setAttribute('src', `./assets/img/sizes-${i + 1}-1.png`);
  //         item.style.position = 'relative';
  //         item.style.zIndex = '10';
  //       }
  //     });
  //   });
  // });

  // blocks.forEach((block, i) => {
  //   block.addEventListener('mouseleave', (e) => {
  //     let target = e.target;

  //     target.children.forEach(item => {
  //       if (item.tagName == 'IMG') {
  //         item.setAttribute('src', `./assets/img/sizes-${i + 1}.png`);
  //         item.style.position = '';
  //         item.style.zIndex = '';
  //       }
  //     });
  //   });
  // });

};

export default pictureSize;