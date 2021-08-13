import React from 'react';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import Card from '../../components/card/Card';
import RegisterForm from '../../components/form-register/RegisterForm';

function RegisterPage() {

    return (
        <PageWrapper>
            REGISTER PAGE
            <Card>
                <RegisterForm />
            </Card>
        </PageWrapper>
    );

}

export default RegisterPage;