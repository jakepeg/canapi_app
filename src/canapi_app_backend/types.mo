import Text "mo:base/Text";


//notes
// we want to create a Field Generic Variant type that can be of some basic types or custom types we can create!


module{

    type Field = {
        #text: Text;
        #blob: blob;
        #date: Time;
    }


    type Entity = HashMap<Text,Field>;




}


