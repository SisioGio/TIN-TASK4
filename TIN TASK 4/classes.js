class User{
    #name;
    
    constructor(name,surname,email,address,birth_date){
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.address=address;
        this.birth_date=birth_date;
    }
    
    getName(){
        return this.name;
    }
    getSurname(){
        return this.surname;
    }
    getEmail(){
        return this.email;
    }
    getAddress(){
        return this.address;
    }
    
    getBirthDate(){
        return this.birth_date;
    }
    
    setName(name){
        this.name = name;
    }
    setSurname(surname){
        this.surname = surname;
    }
    setEmail(email){
        this.email = email;
    }
    setAddress(address){
        this.address = address;
    }
    setBirthDate(birth_date){
        this.birth_date = birth_date;
    }
   
    
}


class Client extends User{
    constructor(name,surname,email,address,birth_date, wallet_address){
        super(name,surname,email,address,birth_date);
        this.wallet_address = wallet_address;
    }
    
    getWalletAddress(){
        return this.wallet_address;
    }
    setWalletAddress(wallet_address){
        this.wallet_address = wallet_address;
    }
    
    buyProduct(product){
        console.log('Buying product...')
    }
    
    
    
}

class Address{
    constructor(street, street_no, city, post_code,country){
        this.street = street;
        this.street_no = street_no;
        this.city= city;
        this.post_code=post_code;
        this.country = country
    }
    
    getStreet(){
        return this.street;
    }
    getStreetNo(){
        return this.street_no;
    }
    getCity(){
        return this.city;
    }
    getPostCode(){
        return this.post_code;
    }
    getCountry(){
        return this.country;
    }
    
    setStreet(street){
        this.street=street;
    }
    
    setStreetNo(street_no){
        this.street_no = street_no;
    }
    setCity(city){
        this.city = city;
    }
    setPostCode(post_code){
        this.post_code = post_code;
    }
    setCountry(country){
        this.country = country;
    }
}



const address_user = new Address("Via S. Agostino","42","Viterbo","01100","Italy")
const user = new User("Alessio","Giovannini",address_user,new Date(1998,03,17))
