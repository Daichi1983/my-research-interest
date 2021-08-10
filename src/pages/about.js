import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="私設 パラオ・太平洋研究室">
     <div class="content">
      <dl>
	<dt>管理人</dt>
	<dd>ウチボリ</dd>
	<dt>最終学歴</dt>
	<dd>大学院修士課程修了</dd>
	<dt>専門</dt>
	<dd>文化人類学（地域はパラオを含むオセアニア。最近は沖縄にも関心あり。）</dd>
	<dd>言語学（生成文法ではなく、記述文法や比較言語学が好きです。）</dd>
	<dt>趣味</dt>
	<dd>読書<br />　書評ブログ：ビブレビ<br />　<a href="https://biblevi.net/">https://biblevi.net/</a></dd>
	<dd>旅行<br />　旅行ブログ：ウェブ紀行<br />　<a href="https://webkikou.net/">https://webkikou.net/</a></dd>
	<dd>中国革命歌（これはやや義務）<br />　歌え中国革命歌<br />　<a href="https://chinesesong.blog.jp/">https://chinesesong.blog.jp/</a></dd>
	<dd>写真</dd>
	<dt>連絡先</dt>
	<dd>utibori1※gmail.com（※を@に変えてください。）</dd>
	<dt>Twitter</dt>
	<dd><a href="https://www.twitter.com/utibori1/">@utibori1</a></dd>
      </dl>
     </div>
    </Layout>
  )
}

export default AboutPage