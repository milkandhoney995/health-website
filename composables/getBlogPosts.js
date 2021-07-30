import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      // blogsのcollectionにつなげる文、getがデータを取ってくるメソッド
      const res = await projectFirestore.collection('blogs').get()
      // res.docs：データがある
      posts.value = res.docs.map((doc) => {
        // doc.data()：doc.dataに実際のデータが格納されている
        // eslint-disable-next-line no-console
        console.log(doc.id)
        return { ...doc.data(), id: doc.id } // スプレッド構文を使って一つのオブジェクトにまとめる
      })
    } catch (err) {
      error.value = err.message
      // eslint-disable-next-line no-console
      console.log(error.value)
    }
  }

  // 使えるようにreturnする
  return { posts, error, load }
  // load()はHome.vueから呼び出したい
  // load()
}

export default getPosts
