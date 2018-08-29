import React, { Component } from 'react';
import Layout from '../../template/layout';
import Content from '../../components/bands/new-content';

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
        if(this.state.userData){
            return(
                <Layout user={this.state.userData}>
                    <Content user={this.state.userData} />
                </Layout>
            )
        }
        return(
            <div>Loading</div>
        )
    }
}

export default index;