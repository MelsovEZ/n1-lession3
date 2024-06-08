'use client';
import PostList from "./components/PostList";

export default function Home() {
    /*
    const [resourceData, setResourceData] = useState<any>(null);

    useEffect(() => {
        const fetchLoginData = async () => {
            try {
                const loginResponse = await axios.post('https://dummyjson.com/auth/login', {
                    username: 'emilys',
                    password: 'emilyspass',
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log(loginResponse.data);

                const resourceResponse = await axios.get('https://dummyjson.com/auth/me', {
                    headers: {
                        'Authorization': `Bearer ${loginResponse.data.token}`,
                    }
                });
                setResourceData(resourceResponse.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchLoginData().then();
    }, []);

    <div>{resourceData && JSON.stringify(resourceData)}</div>
     */

    return (
        <PostList/>
    );
}
