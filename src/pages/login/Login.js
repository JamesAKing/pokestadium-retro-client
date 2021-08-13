import React from 'react';
import LoginForm from '../../components/form-login/LoginForm';
import PageWrapper from '../../components/page-wrapper/PageWrapper';
import Card from '../../components/card/Card';

function LoginPage() {

    return (
        <PageWrapper>
            LOGIN PAGE
            <Card>
                <LoginForm />
            </Card>
        </PageWrapper>

    );
    
}

export default LoginPage;


