//your JS code here. If required.
let out_var = document.querySelector('#output');
let arr = [1, 2, 3, 4]; 

removeOdds(arr);

function removeOdds(arr) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let filter_arr = arr.filter((ele) => {
                return ele % 2 == 0;
            })
            resolve(filter_arr);
        }, 1000);
    }).then((filter_arr_pas) => {
        out_var.textContent = filter_arr_pas.join(',');
        console.log(filter_arr_pas);
        return filter_arr_pas;
    }).then((arr_mul) => {
        setTimeout(() => {
            let ar_multy = arr_mul.map((ele)=>{
                return ele * 2;
            })
            out_var.textContent = ar_multy; 
            console.log(ar_multy);
            
        }, 3000);

    })

}
