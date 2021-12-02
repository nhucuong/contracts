import React, { Component } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import InvestService from '../../services/InvestService';
class DcupSole extends Component {
    constructor(props) {
        super(props)
        this.state = {
            getRemain:'0',
            total: 9000000000,
        }
        this.InvestService = new InvestService(this.props.exchange,this.props.account,this.props.token)
        
    }
    componentDidMount = () => {
        this.InvestService.getRemainSale().then(data => {
            const remain = window.web3.utils.fromWei(data, 'Ether')
                this.setState({getRemain: remain.toString()})
             });
    }
    render() {
        const sole = this.InvestService.getTotalSale(this.state.total,this.state.getRemain)
        const percentBuy = sole*100/this.state.total; 
      
        return (
            <div className="progress_bar">
                <div className="p_top">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 0C15.5156 0 20 4.48006 20 10C20 15.5199 15.5156 20 10 20C4.48438 20 0 15.5199 0 10C0 4.48006 4.48438 0 10 0Z" fill="#1FF493" />
                        <path d="M13.3816 13.4582V11.8569L10.0001 13.234L6.61865 11.8569V13.4582L8.91037 14.3869V14.7071C8.91037 15.3156 8.41356 15.796 7.8206 15.796H7.19559V16.5966H12.8367V15.796H12.2117C11.6027 15.796 11.122 15.2996 11.122 14.7071V14.3869L13.3816 13.4582Z" fill="#02172D" />
                        <path d="M13.3816 13.4582V11.8569L10.0001 13.234L6.61865 11.8569V13.4582L8.91037 14.3869V14.7071C8.91037 15.3156 8.41356 15.796 7.8206 15.796H7.19559V16.5966H12.8367V15.796H12.2117C11.6027 15.796 11.122 15.2996 11.122 14.7071V14.3869L13.3816 13.4582Z" fill="#02172D" />
                        <path d="M13.3814 13.4581V11.8569L10 13.2339V16.6124H12.8205V15.8118H12.1955C11.5865 15.8118 11.1057 15.3155 11.1057 14.723V14.4028L13.3814 13.4581Z" fill="#02172D" />
                        <path d="M8.89432 5.72387L5.09616 4.17067C5.04808 4.15466 5 4.18668 5 4.23472V5.2435V5.90001V7.54928C5 7.58131 5.01603 7.59732 5.04808 7.61333L6.28208 8.10972C6.33016 8.12573 6.37824 8.0937 6.37824 8.04567V6.55652C6.37824 6.50848 6.42631 6.47645 6.47439 6.49247L7.7725 7.02087C7.86865 7.06891 7.94878 7.16499 7.94878 7.27707V9.63089C7.94878 9.67893 7.90071 9.71096 7.85263 9.69494L5.09616 8.57408C5.04808 8.55806 5 8.59009 5 8.63813V10.2714C5 10.3034 5.01603 10.3194 5.04808 10.3354L7.94878 11.5204L9.50331 12.1448C9.55138 12.1609 9.59946 12.1288 9.59946 12.0808V6.74866C9.58344 6.30032 9.31099 5.90001 8.89432 5.72387Z" fill="#02172D" />
                        <path d="M10.4004 6.74925V12.0814C10.4004 12.1294 10.4485 12.1614 10.4965 12.1454L12.0511 11.5209L14.9518 10.336C14.9838 10.32 14.9999 10.304 14.9999 10.272V8.63872C14.9999 8.59068 14.9518 8.55865 14.9037 8.57467L12.1472 9.69553C12.0991 9.71155 12.0511 9.67952 12.0511 9.63148V7.29367C12.0511 7.18159 12.1152 7.08551 12.2274 7.03748L13.5255 6.50907C13.5735 6.49306 13.6216 6.52508 13.6216 6.57312V8.06227C13.6216 8.11031 13.6697 8.14233 13.7178 8.12632L14.9518 7.62993C14.9838 7.61392 14.9999 7.59791 14.9999 7.56589V5.91661V5.2601V4.25132C14.9999 4.20328 14.9518 4.17126 14.9037 4.18727L11.1055 5.74047C10.6728 5.9006 10.4004 6.30091 10.4004 6.74925Z" fill="#02172D" />
                    </svg>
                    DCup
                    <div><span>{sole}</span> / {this.state.total}</div>
                </div>
                <ProgressBar completed={percentBuy} customLabel=" " height='6px' baseBgColor='#1C2D3F' bgColor='#1FF493' />
                <div className="p_bottom">{percentBuy}% bought <span>6h left</span></div>
            </div>
        )
    }
    
}
export default DcupSole;