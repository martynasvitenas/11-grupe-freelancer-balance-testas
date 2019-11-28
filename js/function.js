function menList() {
    let menData = document.getElementById('menInfo');
    let HTML = '';
    for (let i = 0; i < account.length; i++) {
        HTML += `<div class="table-row">
        <div class="cell">${account[i].month}</div>
        <div class="cell">${months[i]}</div>
        <div class="cell">${account[i].income}</div>
        <div class="cell">${account[i].expense}</div>
        <div class="cell">150.00 Eur</div>
    </div>`;
    }


// function neSkaicius (account.income, account.expense ){
//     const incomeTipas = typeof( account.income );
//     const expenseTipas = typeof( account.expense );

//     if ( incomeTipas !== 'number' &&
//     expenseTipas !== 'number' ) {
//    return '0';
// }
// }

        menData.innerHTML = HTML;
}



function balance(){


    return;
}