var colors = {
    red: 'rgb(255, 0, 0)',
    blue: 'rgb(0, 0, 255)',
    yellow: 'rgb(255, 255, 0)',
    green: 'rgb(0, 128, 0)',
    purple: 'rgb(128, 0, 128)',
    orange: 'rgb(255, 165, 0)',
    grey: 'rgb(128, 128, 128)'
}

describe('GUI tests', function () {
    it('test', function () {

        cy.visit('http://localhost:3000/?mode=test')
        cy.window().then((win) => {
            introduceNextItem(win, 'Square');
            moveItemLeft(win, 10)
            dropItemDown(win);
            
            introduceNextItem(win, 'Line');
            rotateItemCW(win, 1)
            moveItemRight(win, 10)
            dropItemDown(win);
           
            introduceNextItem(win, 'Plus');
            moveItemRight(win, 4)
            dropItemDown(win);

            introduceNextItem(win, 'LeftL');
            moveItemLeft(win, 2)
            dropItemDown(win);

            introduceNextItem(win, 'RightL');
            moveItemRight(win, 1)
            dropItemDown(win);

            introduceNextItem(win, 'LeftStep');
            moveItemRight(win, 1)
            rotateItemCW(win, 1)
            dropItemDown(win);

            introduceNextItem(win, 'RightStep');
            moveItemRight(win, 4)
            rotateItemCW(win, 1)
            dropItemDown(win);

            // console.log()


            assertCellBackgroundColor('#myTD_18_0', 'yellow'); 
            assertCellBackgroundColor('#myTD_18_2', 'red');  
            assertCellBackgroundColor('#myTD_18_6', 'blue');
            assertCellBackgroundColor('#myTD_18_11', 'green');
            assertCellBackgroundColor('#myTD_18_10', 'grey');
            assertCellBackgroundColor('#myTD_18_9', 'purple');
            assertCellBackgroundColor('#myTD_18_7','orange');
            
        
          })
        
        
    })
})
function assertCellBackgroundColor(cell,myColor) {
    cy.get(cell).then(cell => {
        expect(cell).to.have.css('background-color',colors[myColor] );
    });
}

function moveItemLeft(win, steps) {
    for (var i = 0; i < steps;i++)
        win.onkeypress({ key: 'j' });
}

function moveItemRight(win, steps) {
    for (var i = 0; i < steps;i++)
        win.onkeypress({ key: 'l' });
}

function rotateItemCW(win, rotations) {
    for (var i = 0; i < rotations;i++)
        win.onkeypress({ key: 'k' });
}

function rotateItemCCW(win, rotations) {
    for (var i = 0; i < rotations;i++)
        win.onkeypress({ key: 'i' });
}


function dropItemDown(win) {
    win.onkeypress({ key: 'm' });
}

function moveItemDown(win,steps) {
    for (var i = 0; i < steps;i++)
        win.onkeypress({ key: 'z' });
}

function introduceNextItem(win, itemType) {
    win.onkeypress({ key: 'x', nextTestItem: itemType  });
}
      