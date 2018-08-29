import React, { Component } from 'react';
import Layout from '../../template/layout';

class index extends Component{
    state = {
        userData: undefined
    }
    componentDidMount(){
        this.setState({userData : JSON.parse(sessionStorage.getItem('user-data'))});
        if(this.state.userData){
            let payload ={
                userid : this.state.userData._id
            }
            axios.post(`${config.apiBaseUrl}/islogged`, payload).then((response)=>{
                if(response.data === 'ko'){
                    this.setState({userData : undefined});
                    sessionStorage.setItem('user-data', undefined);
                }else{
                    sessionStorage.setItem('user-data', response);
                    this.setState({userData: response});
                }
            });
        }
    }
    render(){
        return(
            <Layout user={this.state.userData}>
            </Layout>
        )
    }
}

export default index;