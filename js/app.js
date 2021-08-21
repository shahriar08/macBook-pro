
document.getElementById('8gb-memory').addEventListener('click',function(){
    // let memoryCost = 180;
    const eightGbMemoryCost = document.getElementById('memory-cost');
    eightGbMemoryCost.innerText = 0;

});

document.getElementById('16gb-memory').addEventListener('click',function(){
    const sixteenGbMemoryCost = document.getElementById('memory-cost');
    // const finalCost = sixteenGbMemoryCost.innerText;
    // sixteenGbMemoryCost.innerText = parseInt(finalCost) + 180;
    sixteenGbMemoryCost.innerText = 180;  
})

document.getElementById('256gb-storage').addEventListener('click',function(){
    // let memoryCost = 180;
    const firstStorageCost = document.getElementById('storage-cost');
    firstStorageCost.innerText = 0;

});
document.getElementById('512gb-storage').addEventListener('click',function(){
    // let memoryCost = 180;
    const secondStorageCost = document.getElementById('storage-cost');
    secondStorageCost.innerText = 100;

});
document.getElementById('1tb-storage').addEventListener('click',function(){
    // let memoryCost = 180;
    const thirdStorageCost = document.getElementById('storage-cost');
    thirdStorageCost.innerText = 180;

});
document.getElementById('free-delivery').addEventListener('click',function(){
    // let memoryCost = 180;
    const freeDeliveryCost = document.getElementById('deliver-charge');
    freeDeliveryCost.innerText = 0;

});
document.getElementById('paid-delivery').addEventListener('click',function(){
    // let memoryCost = 180;
    const paidDeliveryCost = document.getElementById('deliver-charge');
    paidDeliveryCost.innerText = 20;

});

