class Wine{
    set(tan,woo,fru,min,flo,spi,aci){
        this.tannic = tan
        this.woody = woo
        this.fruity = fru
        this.mineral = min
        this.floral = flo
        this.spicy = spi
        this.acidic = aci
    }
    set_name(name){
        this.name = name
    }
    constructor(tan=-1,woo=-1,fru=-1,min=-1,flo=-1,spi=-1,aci=-1) {
        this.set(tan,woo,fru,min,flo,spi,aci)
    }
    compare(wine){
        let std_dev =
            Math.abs(this.tannic - wine.tannic)+
            Math.abs(this.woody - wine.woody)+
            Math.abs(this.fruity - wine.fruity)+
            Math.abs(this.mineral - wine.mineral)+
            Math.abs(this.floral - wine.floral)+
            Math.abs(this.spicy - wine.spicy)+
            Math.abs(this.acidic - wine.acidic)
        return std_dev /7.0
    }
}