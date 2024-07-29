export default function Header(props){
    let text = "upi://pay?pa";
    let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa="+props.upi+"&am="+props.amount;
    
    let CountryLogic = [
        {
            id: 1,
            c: "India",
            addressLink: "hjh"
        },
        {
            id: 2,
            c: "Pak",
            addressLink: "https://chat.whatsapp.com/EeF57MgbFLW0gkhzrls26J"
        },
        {
            id: 3,
            c: "China",
            addressLink: "hjh"
        },
    ]


    
    
    
    
    let val = 2;
    let url2 = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+CountryLogic[val-1].addressLink;
    return (
        <>
        {/* <img src={CountryLogic[val-1].addressLink}/> */}
        <img src={url2} alt=""/>
          </>
    );
}