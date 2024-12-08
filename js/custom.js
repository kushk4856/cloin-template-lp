	
/* 
==========================================================
? => Modal Functionality 
========================================================== 

 */

//open modal
function openModal(modalId) {
	// document.body.style.overflow = "hidden";
	const backdrop = document.getElementById(`${modalId}-backdrop`);
	const container = document.getElementById(`${modalId}-container`);
	const modalWrapper = container.querySelector(".modal-wrapper");
  
	// Remove hiding class if present
	backdrop.classList.remove("hiding");
	container.classList.remove("hiding");
  
	// Show modal
	backdrop.classList.add("show");
	container.classList.add("show");
  
	// Add click event listener to the modal wrapper
	modalWrapper.addEventListener("click", (event) => {
	  // If clicked element is the modal wrapper (the outer area)
	  if (event.target === modalWrapper) {
		closeModal(modalId);
	  }
	});
  }
  
  //close modal
  function closeModal(modalId) {
	const backdrop = document.getElementById(`${modalId}-backdrop`);
	const container = document.getElementById(`${modalId}-container`);
  
	// Add hiding class for close animation
	backdrop.classList.add("hiding");
	container.classList.add("hiding");
  
	// Remove show class after animation
	setTimeout(() => {
	  backdrop.classList.remove("show");
	  container.classList.remove("show");
	  backdrop.classList.remove("hiding");
	  container.classList.remove("hiding");
	  document.body.style.overflow = "unset";
	}, 300);
  }
  
 