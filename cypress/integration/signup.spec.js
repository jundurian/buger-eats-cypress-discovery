import signupPage from '../pages/signupPage'
import sigupFactory from '../factories/SignupFactory'

describe('Sign up', function () {

    // beforeEach(function () {
    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d
    //     })
    // });



    it('User should be deliver', function () {

        var deliver = sigupFactory.deliver()

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()

        const expected_message = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expected_message)


    });

    it('Incorret document', function () {

        var deliver = sigupFactory.deliver()

        deliver.cpf = '00000012121AA'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()

        signupPage.alertMessageShouldBe('Oops! CPF inválido')


    });

    it('Incorret email', function () {

        var deliver = sigupFactory.deliver()

        deliver.email = "hahaha.com.br"

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()

        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.')
    });

    context('Required Fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function(){
            signupPage.go()
            signupPage.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required` ,function(){
                signupPage.alertMessageShouldBe(msg.output)
            }
                
            );
        })

    })



    // it('Required fields', function () {


    //     signupPage.alertMessageShouldBe('É necessário informar o nome')
    //     signupPage.alertMessageShouldBe('É necessário informar o CPF')
    //     signupPage.alertMessageShouldBe('É necessário informar o email')
    //     signupPage.alertMessageShouldBe('É necessário informar o CEP')
    //     signupPage.alertMessageShouldBe('É necessário informar o número do endereço')
    //     signupPage.alertMessageShouldBe('Selecione o método de entrega')
    //     signupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')



    // });

});
