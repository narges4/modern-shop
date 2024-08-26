toastr.options = {
  timeOut: 3000,
  progressBar: true,
  showMethod: "slideDown",
  hideMethod: "slideUp",
  showDuration: 200,
  hideDuration: 200
};
$(function(){
  // "use strict";
  
  // ========== Form-select-option ========== //
  $('.radio-list input').click(function () {
    $('input:not(:checked)').parent().removeClass("active");
    $('input:checked').parent().addClass("active");
  }); 
  
  
  $('.check-list label').on('change', function(e) {
    e.stopPropagation();
    if($(this).hasClass('active')) {
      $(this).removeClass("active");
    } else if( !$(this).hasClass('active') ) {
      $(this).addClass("active");
    }
  });
 
  
  //multi form ===================================
  //DOM elements
  const DOMstrings = {
    stepsBtnClass: 'step',
    stepsBtns: document.querySelectorAll(`.step`),
    stepsForm: document.querySelector('.multisteps_form'),
    stepFormPanelClass: 'multisteps_form_panel',
    stepFormPanels: document.querySelectorAll('.multisteps_form_panel'),
    stepPrevBtnClass: 'js-btn-prev',
    stepNextBtnClass: 'js-btn-next'
  };
  
  
  //remove class from a set of items
  const removeClasses = (elemSet, className) => {
    
    elemSet.forEach(elem => {
      
      elem.classList.remove(className);
      
    });
    
  };
  
  //return exect parent node of the element
  const findParent = (elem, parentClass) => {
    
    let currentNode = elem;
    
    while (!currentNode.classList.contains(parentClass)) {
      currentNode = currentNode.parentNode;
    }
    
    return currentNode;
    
  };
  
  //get active button step number
  const getActiveStep = elem => {
    return Array.from(DOMstrings.stepsBtns).indexOf(elem);
  };
  
  //set all steps before clicked (and clicked too) to active
  const setActiveStep = activeStepNum => {
    
    //remove active state from all the state
    removeClasses(DOMstrings.stepsBtns, 'active');
    removeClasses(DOMstrings.stepsBtns, 'current');
    
    //set picked items to active
    DOMstrings.stepsBtns.forEach((elem, index) => {
      if (index <= activeStepNum) {
        elem.classList.add('active');
        $(elem).addClass(index);
        
      }
      
      if (index == activeStepNum) {
        elem.classList.add('current');
      }
      
    });
  };
  
  //get active panel
  const getActivePanel = () => {
    
    let activePanel;
    
    DOMstrings.stepFormPanels.forEach(elem => {
      
      if (elem.classList.contains('active')) {
        
        activePanel = elem;
        
      }
      
    });
    
    return activePanel;
    
  };
  
  //open active panel (and close unactive panels)
  const setActivePanel = activePanelNum => {
    
    const animation = $(DOMstrings.stepFormPanels, 'active').attr("data-animation");
    
    //remove active class from all the panels
    removeClasses(DOMstrings.stepFormPanels, 'active');
    removeClasses(DOMstrings.stepFormPanels, animation);
    removeClasses(DOMstrings.stepFormPanels, 'animate__animated');
    
    //show active panel
    DOMstrings.stepFormPanels.forEach((elem, index) => {
      if (index === activePanelNum) {
        
        elem.classList.add('active');
        // stepFormPanels
        elem.classList.add('animate__animated', animation);
        
        setTimeout(function() {
          removeClasses(DOMstrings.stepFormPanels, 'animate__animated', animation);
        }, 1200);
        
        
      }
    });
    
  };
  
  
  //PREV/NEXT BTNS CLICK
  DOMstrings.stepsForm.addEventListener('click', e => {
    
    const eventTarget = e.target;
    
    //check if we clicked on `PREV` or NEXT` buttons
    if (!(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) || eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`))) {
      return;
    }
    
    //find active panel
    const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);
    
    let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);
    
    
    //set active step and active panel onclick
    if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) ) {
      activePanelNum--;
      
      setActiveStep(activePanelNum);
      setActivePanel(activePanelNum);
      
    } else if(eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)  ) { 
      
      var form = $('#wizard');
      
      var parent_fieldset = $('.multisteps_form_panel.active');
      var next_step = true;
      
      parent_fieldset.find('.required').each( function(){
        next_step = false;
        var form = $('.required');
        form.validate();
        $(this).addClass('invalid is-invalid');
      }); 
      
      if( next_step === true || form.valid() === true ) {
        var position = $('.wrapper').offset().top;
        $("html, body").scrollTop(Math.abs(position))
        activePanelNum++;
        setActiveStep(activePanelNum);
        setActivePanel(activePanelNum);
      }else {
        toastr.error('لطفا یک گزینه را انتخاب کنید');
      }
    } 
    
    
  });  
  
});


function makeTimer() {

			var endTime = SetTime;	
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;
      
      if(timeLeft < 0){
        $('#timer').empty()
        $('#timer').html("<span> زمان شما به پایان رسید </span>")

        $('#timer_2').empty()
        $('#timer_2').html("<span> زمان شما به پایان رسید </span>")
      }else{
        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
  
        $("#hours").html(hours + "<p>ساعت</p>");
        $("#minutes").html(minutes + "<p>دقیقه</p>");
        $("#seconds").html(seconds + "<p>ثانیه</p>");		

        $("#hours_2").html(hours + "<p>ساعت</p>");
        $("#minutes_2").html(minutes + "<p>دقیقه</p>");
        $("#seconds_2").html(seconds + "<p>ثانیه</p>");		
      }

	}

	setInterval(function() { makeTimer(); }, 1000);
