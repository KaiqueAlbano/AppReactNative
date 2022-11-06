import React,{useState} from 'react' 
export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {

    const [user,setUser] = useState({
        Login : '',
        Senha : ''
    });
    const [ShowMenu,setShowMenu] = useState(false);

    return (
        <AuthContext.Provider value={{ 
             user
            ,setUser 
            ,setShowMenu
            ,ShowMenu}}>
          {props.children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => React.useContext(AuthContext);