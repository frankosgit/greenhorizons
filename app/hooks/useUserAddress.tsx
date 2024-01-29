import address from "@/types/address"

const useUserAddress = async (): Promise<address> => {
 let address: address = {
      id: 0,
      name: "",
      address: "",
      city: "",
      postcode: 0,
      country: "",
 }
 let response = await fetch("/api/address/get")

 if (response) {
    let data = await response.json()
    if (data) address = data
 }
    return address
}

export default useUserAddress