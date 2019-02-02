describe('GUI tests', function () {
    it('test', function () {

        cy.visit('http://localhost:3000/?mode=test')
        cy.window().then((win) => {
            win.onkeypress({ key: 'z', nextTestItem : 'Square' })
            win.onkeypress({ key: 'm' })
            win.onkeypress({ key: 'z', nextTestItem: 'Line' })
            
            win.onkeypress({ key: 'm' })
            
            win.onkeypress({ key: 'z', nextTestItem : 'Plus' })
            win.onkeypress({ key: 'm' })
            win.onkeypress({ key: 'z', nextTestItem : 'LeftL' })
            win.onkeypress({ key: 'm' })
            win.onkeypress({ key: 'z', nextTestItem : 'RightL' })
            win.onkeypress({ key: 'm' })
            win.onkeypress({ key: 'z', nextTestItem : 'LeftStep' })
            win.onkeypress({ key: 'm' })
            win.onkeypress({ key: 'z', nextTestItem : 'RightStep' })
            win.onkeypress({ key: 'm' })
          })
        
        
    })
})


      