function range (){
    let slider = document.querySelector('#range');
    let setImg = document.querySelectorAll('.img_collection img');
    slider.oninput = function (){
        if(slider.value > 0 && slider.value < 41){
            for(let i = 0 ; i < setImg.length ; i++){
                setImg[i].style.display = 'none';
                if( i == 0 || i == 3 || i == 5 || i == 7){
                    setImg[i].style.display = 'inline-block';
                }
            }
        }
        if(slider.value > 41 &&  slider.value < 68){
            for(let i = 0 ; i < setImg.length ; i++){
                setImg[i].style.display = 'none';
                if( i == 1 || i == 2 || i == 5 || i == 7){
                    setImg[i].style.display = 'inline-block';
                }
            }
            
        }
        if(slider.value >= 68 && slider.value < 95){
            for(let i = 0 ; i < setImg.length ; i++){
                setImg[i].style.display = 'none';
                if( i == 1 || i == 3 || i == 4 || i == 7){
                    setImg[i].style.display = 'inline-block';
                }
            }
        }
        if(slider.value > 95 && slider.value <= 100 ){
            for(let i = 0 ; i < setImg.length ; i++){
                setImg[i].style.display = 'none';
                if( i == 1 || i == 3 || i == 5 || i == 6){
                    setImg[i].style.display = 'inline-block';
                }
            }
        
        }
}
}

export default range;

