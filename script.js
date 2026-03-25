 const leaves = document.querySelectorAll('.leaf');
    const leafSection = document.querySelector('.leaf-section');

    let targetY = 0;
    let currentY = 0;

    // 해당 섹션이 문서 전체에서 어디쯤(Y좌표) 위치해 있는지 가져옵니다.
    const sectionOffset = leafSection.offsetTop;

    window.addEventListener('scroll', () => {
      // 핵심: 전체 스크롤 값에서 섹션의 시작 위치를 뺍니다.
      // 이렇게 하면 스크롤이 해당 섹션에 도달했을 때 애니메이션 기준점이 0에 맞춰집니다.
      targetY = window.scrollY - sectionOffset;
    });

    function animate() {
      currentY += (targetY - currentY) * 0.09; // 텐션 강도 조절 (0.08)

      leaves.forEach(leaf => {
        const speed = leaf.getAttribute('data-speed');
        
        // 이동 거리와 회전값 계산
        const moveY = currentY * speed;
        const rotateZ = currentY * speed * 0.1;

        leaf.style.transform = `translateY(${moveY}px) rotate(${rotateZ}deg)`;
      });

      requestAnimationFrame(animate);
    }

    animate();