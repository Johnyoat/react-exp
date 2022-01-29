import React from 'react'
import Link from 'gatsby-link'
import Header from "../components/header";

const IndexPage = () => (
    <div>
        <Header/>
        <div className="Hero">
            <div className="HeroGroup">
                <h1>Learn to design and code react apps</h1>
                <p>Complete course about the best tools and design systems. Prototype and build apps with React and
                    Swift.
                    60 hours of video content and resource materials. No coding experience required</p>

                <Link to="/video">Watch the video</Link>
            </div>
        </div>
    </div>
)

export default IndexPage
