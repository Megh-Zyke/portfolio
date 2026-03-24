'use client';
import { useState, useEffect, useCallback } from 'react';
import styles from './MediumArticles.module.css';
import Navbar from '../components/Navbar';

const MEDIUM_USERNAME = 'meghanand1234';
const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

export default function MediumArticles() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [active, setActive] = useState(null);

    useEffect(() => {
        async function fetchArticles() {
            try {
                const res = await fetch(RSS_URL);
                const data = await res.json();
                if (data.status !== 'ok') throw new Error('Feed error');
                setArticles(data.items || []);
            } catch (err) {
                setError('Could not load articles.');
            } finally {
                setLoading(false);
            }
        }
        fetchArticles();
    }, []);

    const closeModal = useCallback(() => setActive(null), []);

    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
        if (active) {
            document.addEventListener('keydown', onKey);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [active, closeModal]);

    function stripHtml(html) {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    }

    function getExcerpt(html, len = 160) {
        const text = stripHtml(html);
        return text.length > len ? text.slice(0, len).trimEnd() + '…' : text;
    }

    function getReadTime(html) {
        const words = stripHtml(html).split(/\s+/).length;
        return `${Math.max(1, Math.ceil(words / 200))} min read`;
    }

    function formatDate(dateStr) {
        return new Date(dateStr).toLocaleDateString('en-US', {
            month: 'short', day: 'numeric', year: 'numeric',
        });
    }

    function getArticleBody(html) {
        return html.replace(/<figure[\s\S]*?<\/figure>/, '')
            .replace(`<img src="https:\/\/medium.com\/_/stat\?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=6782bc739759" width="1" height="1" alt="">`, '').trim();
    }

    if (loading) {
        return (
            <>
                <Navbar />
                <section className={styles.section}>
                    <div className={styles.loadingRow}>
                        {[1, 2, 3].map((i) => <div key={i} className={styles.skeleton} />)}
                    </div>
                </section>
            </>
        );
    }

    if (error) {
        return (
            <>
                <Navbar />
                <section className={styles.section}>
                    <p className={styles.error}>{error}</p>
                </section>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <section className={styles.section}>


                <div className={styles.list}>
                    {articles.map((article) => (
                        <div
                            key={article.guid}
                            className={styles.card}
                            onClick={() => setActive(article)}
                        >
                            {article.thumbnail && (
                                <div className={styles.thumb}>
                                    <img src={article.thumbnail} alt="" />
                                </div>
                            )}
                            <div className={styles.cardBody}>
                                <div className={styles.meta}>
                                    <span className={styles.date}>{formatDate(article.pubDate)}</span>
                                    <span className={styles.dot}>·</span>
                                    <span className={styles.readTime}>{getReadTime(article.content)}</span>
                                    {article.categories?.slice(0, 2).map((tag) => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                                <h2 className={styles.title}>{article.title}</h2>
                                <p className={styles.excerpt}>{getExcerpt(article.content)}</p>
                            </div>
                            <div className={styles.cardArrow}>↗</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Modal overlay ── */}
            {active && (
                <div
                    className={styles.overlay}
                    onClick={closeModal}
                    role="dialog"
                    aria-modal="true"
                    aria-label={active.title}
                >
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

                        {/* Sticky header inside modal */}
                        <div className={styles.modalHeader}>
                            <div className={styles.modalMeta}>
                                <span className={styles.date}>{formatDate(active.pubDate)}</span>
                                <span className={styles.dot}>·</span>
                                <span className={styles.readTime}>{getReadTime(active.content)}</span>
                                {active.categories?.slice(0, 3).map((tag) => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                            <button className={styles.closeBtn} onClick={closeModal} aria-label="Close article">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>

                        {/* Scrollable body */}
                        <div className={styles.modalScroll}>
                            <h1 className={styles.modalTitle}>{active.title}</h1>
                            <div
                                className={styles.articleBody}
                                dangerouslySetInnerHTML={{ __html: getArticleBody(active.content) }}
                            />
                            <div className={styles.modalFooter}>
                                <a
                                    href={active.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.readOnMedium}
                                >
                                    Read full article on Medium ↗
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}